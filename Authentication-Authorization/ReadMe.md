# How to create certificate and CSR for user

## commands
- openssl genrsa -out colley.key 2048
- openssl req -new -key colley.key -out colley.csr -subj "/CN=colley"
- base64 < colley.csr | tr -d "\n" > base64-colley-without-newline.csr
- k apply -f csr-for-colley.yaml
- k certificate approve colley
- kubectl get csr/colley -o yaml > issuedCert-for-colley.yaml
- echo "IssueCert" | base64 -d | issusedCert.csr 