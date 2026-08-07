# Planeamento de Horários (Simples)

Esta pasta contém a Opção B: uma aplicação ultraleve (`TimeOff Management`) que corre num único contentor Docker e utiliza uma base de dados SQLite local, garantindo máxima velocidade e manutenção zero.

## Como iniciar localmente

1. Navegue até esta pasta:
   ```bash
   cd schedule-planner-docker
   ```
2. Inicie o contentor:
   ```bash
   docker-compose up -d
   ```
3. Aceda à plataforma no seu browser:
   **http://localhost:3000**

## Configuração Inicial
1. Ao abrir pela primeira vez, registe uma nova conta de empresa.
2. O primeiro utilizador a registar-se torna-se automaticamente o Administrador.
3. Pode criar "Departamentos" (ex: Creche, Jardim de Infância) e convidar educadores.
4. Para usar como planeador de turnos, pode criar "Leave Types" com nomes de turnos (ex: "Turno da Manhã", "Turno da Tarde") e colocá-los no calendário visual de cada funcionário.
