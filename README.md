# ![logo-timer](https://github.com/cecidoliveira/minutos-de-debate/assets/108581198/2d282b17-5ded-4efd-8dc0-7f1baf06029c)
Programa criado para contabilizar o tempo de cada debatedor tem para expor ou defender sua tese ou tema.

&nbsp;

- Foram criados duas telas ( uma delas contendo o temporizador disponivel do debatedor da vez e a outra tela com ajustes de tempo e atalhos que estão configurados para manipulação da tela do timer )
  
![temporizador_screen](https://github.com/cecidoliveira/minutos-de-debate/assets/108581198/c5ee765b-093b-4fc8-8e51-8e08e1fe9fff)
![config_screen](https://github.com/cecidoliveira/minutos-de-debate/assets/108581198/9022e9f4-5300-4681-803c-d1c655f6da27)



> Stacks utilizadas
&nbsp;

[![Stacks](https://skillicons.dev/icons?i=html,css,js,electron)](https://skillicons.dev)

-----


### Inicialização do projeto
```
npm install
npm install --save-dev @electron-forge/cli
npm exec --package=@electron-forge/cli -c "electron-forge import"
npm run start
```
### Criação dos executaveis p/ win x32 e x64
```
npm install electron-squirrel-startup
npm run make -- --arch="ia32,x64"
```


