# Creating a user and attaching permission.

## Create a openssl rsa key and certificate for user
- openssl genrsa -out diru.key 2048
- openssl req -new -key diru.key -out diru.csr -subj "/CN=diru"

## Create certificate signing request object using the user's cert in base64
- cat diru.csr | base64 | t -d "\n"  converts the cert into base64 encoded and remove all newlines

```
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: diru
spec:
  request: $(cat diru.csr | base64 | tr -d "\n")
  signerName: kubernetes.io/kube-apiserver-client
  expirationSeconds: 864000  # one day
  usages:
  - client auth

```

## Approve the CSR
- k certificate approve diru

## Create a role for viewing the pods in default namespaces
```
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods"]
  verbs: ["get", "watch", "list"]

``` 

## Associate the role to the user diru using a role-binding object
```
apiVersion: rbac.authorization.k8s.io/v1
# This role binding allows "jane" to read pods in the "default" namespace.
# You need to already have a Role named "pod-reader" in that namespace.
kind: RoleBinding
metadata:
  name: read-pods
  namespace: default
subjects:
# You can specify more than one "subject"
- kind: User
  name: diru # "name" is case sensitive
  apiGroup: rbac.authorization.k8s.io
roleRef:
  # "roleRef" specifies the binding to a Role / ClusterRole
  kind: Role #this must be Role or ClusterRole
  name: pod-reader # this must match the name of the Role or ClusterRole you wish to bind to
  apiGroup: rbac.authorization.k8s.io

```

## Get the issued cert and convert it cert from base64 to csr
- k get certificatesigningrequests.certificates.k8s.io/diru -o jsonpath='{.status.certificate}' \
| base64 -d > diru.crt

## Create an entery for the user in kubeconfig

``` 
kubectl config set-credentials diru \
  --client-certificate=diru.crt \
  --client-key=diru.key

```

## Create a new context and bind the user to the cluster

```

kubectl config set-context diru \
  --cluster=test-cluster \
  --namespace=default \
  --user=diru

```