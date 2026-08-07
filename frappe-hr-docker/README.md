# Configuração do Frappe HR via Docker

Esta pasta contém o ficheiro `docker-compose.yml` necessário para instalar o Frappe HR (com o ERPNext) no vosso servidor VPS (Linux).

## Pré-requisitos
O vosso VPS deve ter instalado:
- Docker
- Docker Compose

## Instalação

1. Copie esta pasta `frappe-hr-docker` para o vosso servidor VPS.
2. Navegue até à pasta no terminal do servidor:
   ```bash
   cd frappe-hr-docker
   ```
3. Inicie os contentores em background:
   ```bash
   docker-compose up -d
   ```
4. O processo inicial vai demorar alguns minutos, pois o Docker vai criar a base de dados MariaDB, instalar a app Frappe e configurar o novo site `hr.omundopula.pt`.
5. Pode acompanhar o progresso de configuração com o comando:
   ```bash
   docker-compose logs -f create-site
   ```

## Acesso e Primeiros Passos

Após a conclusão da instalação:
1. O portal estará acessível na porta 8080 do vosso servidor.
2. Recomendamos a configuração de um reverse proxy (ex: Nginx Proxy Manager ou Traefik) no VPS para direcionar o domínio `hr.omundopula.pt` com certificado SSL para esta porta 8080.
3. As credenciais por defeito (configuradas no ficheiro) são:
   - Utilizador: `Administrator`
   - Password: `admin`
4. **IMPORTANTE:** Assim que fizer o primeiro login, altere a password do Administrator imediatamente.

## Módulos Instalados
- Frappe Framework
- ERPNext (Gestão Base)
- HRMS (Frappe HR - Gestão de Folgas, Turnos, Recrutamento)
