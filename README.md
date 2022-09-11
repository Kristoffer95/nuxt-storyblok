# Nuxt 3

## References: 
 - https://www.storyblok.com/tp/add-a-headless-CMS-to-nuxt-3-in-5-minutes
 - https://www.storyblok.com/faq/setup-dev-server-https-proxy
   - Generate certificate(localhost-key.pem && localhost.pem):
     - mkcert localhost
     - local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem  // Running the proxy to target port 3000, you can change that any port of your choice but it should be what your app is running on in development.
 - [Nuxt-2] https://www.storyblok.com/tp/headless-cms-nuxtjs