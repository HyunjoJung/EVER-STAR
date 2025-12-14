package com.everstarbackmain.global.util;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.UUID;

import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.models.BlobHttpHeaders;
import com.everstarbackmain.global.exception.CustomException;
import com.everstarbackmain.global.exception.ExceptionResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class AzureBlobStorageUtil {

	private final BlobContainerClient petImagesBlobContainerClient;
	private final BlobContainerClient letterImagesBlobContainerClient;
	private final BlobContainerClient memorialImagesBlobContainerClient;

	/**
	 * Upload file to pet-images container (default container for backward compatibility)
	 */
	public String saveFile(MultipartFile multipartFile) {
		return saveFile(multipartFile, ContainerType.PET_IMAGES);
	}

	/**
	 * Upload file to specified container
	 */
	public String saveFile(MultipartFile multipartFile, ContainerType containerType) {
		String originalFilename = UUID.randomUUID() + getFileExtension(multipartFile.getOriginalFilename());

		BlobContainerClient containerClient = getContainerClient(containerType);
		BlobClient blobClient = containerClient.getBlobClient(originalFilename);

		try (InputStream inputStream = multipartFile.getInputStream()) {
			// Set content type for proper display in browsers
			BlobHttpHeaders headers = new BlobHttpHeaders()
				.setContentType(multipartFile.getContentType());

			blobClient.upload(inputStream, multipartFile.getSize(), true);
			blobClient.setHttpHeaders(headers);

			// Return the blob URL
			return blobClient.getBlobUrl();
		} catch (IOException e) {
			log.error("Failed to upload file to Azure Blob Storage: {}", originalFilename, e);
			throw new ExceptionResponse(CustomException.AZURE_BLOB_UPLOAD_EXCEPTION);
		}
	}

	/**
	 * Upload base64 encoded file to pet-images container (default for backward compatibility)
	 */
	public String uploadByEncodedFile(String encodedFile) {
		return uploadByEncodedFile(encodedFile, ContainerType.PET_IMAGES);
	}

	/**
	 * Upload base64 encoded file to specified container
	 */
	public String uploadByEncodedFile(String encodedFile, ContainerType containerType) {
		try {
			byte[] decodedBytes = Base64.getDecoder().decode(encodedFile);
			MultipartFile decodedImageFile = new MockMultipartFile(
				"image",
				UUID.randomUUID() + ".png",
				"image/png",
				decodedBytes
			);
			return saveFile(decodedImageFile, containerType);
		} catch (IllegalArgumentException e) {
			log.error("Failed to decode base64 file", e);
			throw new ExceptionResponse(CustomException.INVALID_BASE64_FORMAT);
		}
	}

	/**
	 * Delete file from specified container
	 */
	public void deleteFile(String blobUrl, ContainerType containerType) {
		try {
			String blobName = extractBlobNameFromUrl(blobUrl);
			BlobContainerClient containerClient = getContainerClient(containerType);
			BlobClient blobClient = containerClient.getBlobClient(blobName);

			blobClient.delete();
			log.info("Successfully deleted blob: {}", blobName);
		} catch (Exception e) {
			log.error("Failed to delete file from Azure Blob Storage: {}", blobUrl, e);
			throw new ExceptionResponse(CustomException.AZURE_BLOB_DELETE_EXCEPTION);
		}
	}

	/**
	 * Get the appropriate container client based on container type
	 */
	private BlobContainerClient getContainerClient(ContainerType containerType) {
		return switch (containerType) {
			case PET_IMAGES -> petImagesBlobContainerClient;
			case LETTER_IMAGES -> letterImagesBlobContainerClient;
			case MEMORIAL_IMAGES -> memorialImagesBlobContainerClient;
		};
	}

	/**
	 * Extract file extension from filename
	 */
	private String getFileExtension(String filename) {
		if (filename == null || !filename.contains(".")) {
			return "";
		}
		return filename.substring(filename.lastIndexOf("."));
	}

	/**
	 * Extract blob name from full blob URL
	 */
	private String extractBlobNameFromUrl(String blobUrl) {
		// Azure blob URL format: https://{account}.blob.core.windows.net/{container}/{blobname}
		String[] parts = blobUrl.split("/");
		return parts[parts.length - 1];
	}

	/**
	 * Container type enum for specifying which container to use
	 */
	public enum ContainerType {
		PET_IMAGES,
		LETTER_IMAGES,
		MEMORIAL_IMAGES
	}
}
