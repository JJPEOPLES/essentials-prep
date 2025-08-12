# PowerShell script to download e-commerce platform logos

$logoUrls = @{
    "amazon-logo.png" = "https://freebiesupply.com/logos/amazon-logo/amazon-logo-transparent.png";
    "ebay-logo.png" = "https://www.stickpng.com/img/icons-logos-emojis/tech-companies/ebay-logo";
    "shopify-logo.png" = "https://www.freepnglogos.com/uploads/shopify-logo-png/shopify-logo-commerce-platform-2.png";
    "etsy-logo.png" = "https://freebiesupply.com/logos/etsy-logo/etsy-logo-transparent.png";
    "walmart-logo.png" = "https://www.freepnglogos.com/uploads/walmart-logo-24.png";
    "woocommerce-logo.png" = "https://www.stickpng.com/img/icons-logos-emojis/tech-companies/woocommerce-logo";
}

$outputDir = "public\images\logos"

# Create the directory if it doesn't exist
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

# Download each logo
foreach ($logo in $logoUrls.GetEnumerator()) {
    $outputPath = Join-Path $outputDir $logo.Key
    Write-Host "Downloading $($logo.Key) from $($logo.Value)"
    
    try {
        Invoke-WebRequest -Uri $logo.Value -OutFile $outputPath
        Write-Host "Downloaded $($logo.Key) successfully"
    }
    catch {
        Write-Host "Failed to download $($logo.Key): $_"
    }
}

Write-Host "Logo download complete!"