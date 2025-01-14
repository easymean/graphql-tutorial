## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Nest-cli

```bash
$ nest generate --help
$ nest g [shematic] [name] [options]
```

[Schematics]
| 이름 | 요약 | 설명 |
|-------------|------|----------------------------------------------------------------------------------------|
| app | | 단일 저장소 내에서 새 애플리케이션을 생성하십시오(표준 구조인 경우 단일 저장소로 변환). |
| library | lib | 단일 저장소 내에서 새 라이브러리를 생성합니다(표준 구조인 경우 단일 저장소로 변환). |
| class | cl | 새 클래스를 생성합니다. |
| controller | co | 컨트롤러 선언을 생성합니다. |
| decorator | d | 사용자 지정 데코레이터를 생성합니다. |
| filter | f | 필터 선언을 생성합니다. |
| gateway | ga | 게이트웨이 선언을 생성합니다. |
| guard | gu | 가드 선언을 생성합니다. |
| interface | itf | 인터페이스를 생성합니다. |
| interceptor | itc | 인터셉터 선언을 생성합니다. |
| middleware | mi | 미들웨어 선언을 생성합니다. |
| module | mo | 모듈 선언을 생성합니다. |
| pipe | pi | 파이프 선언을 생성합니다. |
| provider | pr | 공급자 선언을 생성합니다. |
| resolver | r | 확인자 선언을 생성합니다. |
| resource | res | 새 CRUD 리소스를 생성합니다. |
| service | s | 서비스 선언을 생성합니다. |
