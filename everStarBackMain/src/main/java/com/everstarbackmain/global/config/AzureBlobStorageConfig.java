package com.everstarbackmain.global.config;

import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Getter
public class AzureBlobStorageConfig {

    @Value("${azure.storage.account-name}")
    private String accountName;

    @Value("${azure.storage.account-key}")
    private String accountKey;

    @Value("${azure.storage.blob-endpoint}")
    private String blobEndpoint;

    @Value("${azure.storage.container.pet-images}")
    private String petImagesContainer;

    @Value("${azure.storage.container.letter-images}")
    private String letterImagesContainer;

    @Value("${azure.storage.container.memorial-images}")
    private String memorialImagesContainer;

    @Bean
    public BlobServiceClient blobServiceClient() {
        String connectionString = String.format(
            "DefaultEndpointsProtocol=https;AccountName=%s;AccountKey=%s;EndpointSuffix=core.windows.net",
            accountName,
            accountKey
        );

        return new BlobServiceClientBuilder()
            .connectionString(connectionString)
            .buildClient();
    }

    @Bean
    public BlobContainerClient petImagesBlobContainerClient(BlobServiceClient blobServiceClient) {
        return blobServiceClient.getBlobContainerClient(petImagesContainer);
    }

    @Bean
    public BlobContainerClient letterImagesBlobContainerClient(BlobServiceClient blobServiceClient) {
        return blobServiceClient.getBlobContainerClient(letterImagesContainer);
    }

    @Bean
    public BlobContainerClient memorialImagesBlobContainerClient(BlobServiceClient blobServiceClient) {
        return blobServiceClient.getBlobContainerClient(memorialImagesContainer);
    }
}
