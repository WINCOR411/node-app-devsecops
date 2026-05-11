# DevSecOps M2 — TP4 : CI/CD Pipeline with Trivy Security Gate

## Architecture
```
GitHub Push → GitHub Actions → Trivy Scan → Docker Hub → ArgoCD → K3s
```

## Apps
- **app-secure** : node:18-alpine + express@4.19.2 → passe le scan Trivy ✅
- **app-vuln**   : node:10 + express@4.17.1 → bloquée par Trivy ❌

## GitHub Secrets requis
- `DOCKER_USERNAME` : votre username Docker Hub
- `DOCKER_TOKEN`    : votre token d'accès Docker Hub

## Accès application
```bash
curl http://172.16.200.160:30090/
```
