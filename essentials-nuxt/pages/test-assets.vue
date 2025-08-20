<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-8">Asset Test Page</h1>
    
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Video Test:</h2>
      <video 
        src="/videos/gemini_generated_video_A29B7B16.MP4" 
        class="w-96 h-64 object-cover" 
        controls
      />
    </div>
    
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Logo Test:</h2>
      <div class="grid grid-cols-4 gap-4">
        <img src="/images/logos/Amazon_logo.svg" alt="Amazon" class="h-16 object-contain" />
        <img src="/images/logos/Shopify_logo_2018.svg" alt="Shopify" class="h-16 object-contain" />
        <img src="/images/logos/Etsy-Logo.png" alt="Etsy" class="h-16 object-contain" />
        <img src="/images/logos/TiktokShop.png" alt="TikTok Shop" class="h-16 object-contain" />
      </div>
    </div>
    
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Carrier Test:</h2>
      <div class="grid grid-cols-4 gap-4">
        <img src="/images/carriers/ups.png" alt="UPS" class="h-16 object-contain" />
        <img src="/images/carriers/fedex.png" alt="FedEx" class="h-16 object-contain" />
        <img src="/images/carriers/usps.png" alt="USPS" class="h-16 object-contain" />
        <img src="/images/carriers/dhl.png" alt="DHL" class="h-16 object-contain" />
      </div>
    </div>
  </div>
</template>