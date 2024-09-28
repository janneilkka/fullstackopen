```mermaid
    browser->>server: GET: .../exampleapp/notes
    activate server
    server->>browser: HTML document
    deactivate server
```
