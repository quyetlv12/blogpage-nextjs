export const changeDomain = (url) => {
    const regex = /^http:\/\/api\.diginextgroup\.vn\//;
    
    // ... existing code ...
    return url && url.replace(regex, 'https://apietelecom.diginext.com.vn:3000/dgpost/');
  }
  export const changeDomainContent = (content) => {
    const result  = content && content.replace(/http:\/\/api\.diginextgroup\.vn\//g, 'https://apietelecom.diginext.com.vn:3000/dgpost/')
    return result
  }
  