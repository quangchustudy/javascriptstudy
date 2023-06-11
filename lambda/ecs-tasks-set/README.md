# ECS TASKS SET

**Description:** This project aims to automatically shut down and start ECS services as tasks, thereby reducing costs.

## Project structure

- `ecs-tasks-set`
  - `infra`: contains all info to build the infrastructure on cloud for this project
    - `lambda-triggers`: Contains source code for each lambda trigger written in JS
    - `.aws-sam`: hidden files generated at the local level during the building phase of SAM
      - `build`: including all source code that we need to build it into the .zip file 
    - `template.yaml`: contains configuration for the SAM build
    - `samconfig.toml`: contains default configuration for the SAM build

## CLI 

```s
sam build
sam deploy
```