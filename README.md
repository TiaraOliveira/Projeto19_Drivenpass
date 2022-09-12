# Projeto19_Drivenpass


rotas:

signup
/signup
.post:
body:{email, password}
> criação de usuario

signup
/signin
.post:
body:{email, password}
> sigin de usuario com geração do token


CARTÔES
/createcard
.post:
header {Authorization : APIKEY-api-key}
body:{cardNumber, cardName, cvc, expiratedDate, password, isVirtual, type, cardTag}
> criação de um cartão feita por uma usuario que tenha uma chave API válida

CARTÔES
/createcard
.post:
header {Authorization : APIKEY-api-key}
body:{cardNumber, cardName, cvc, expiratedDate, password, isVirtual, type, cardTag}
> criação de um cartão feita por uma usuario que tenha uma chave API válida

/searchcard
.get:
header {Authorization : APIKEY-api-key}
> vizualização dos um cartão do usuario

/searchcard/:id
.get:
header {Authorization : APIKEY-api-key}
> vizualização de cartao por id do usuario

/deletecard/:id
.delete:
header {Authorization : APIKEY-api-key}
> deleta de cartao por id do usuario


wifi
/createwifi
.post:
header {Authorization : APIKEY-api-key}
body:{networkName, password, wifiTag}
> criação de um wifi feita por uma usuario que tenha uma chave API válida

/searchwifi
.get:
header {Authorization : APIKEY-api-key}
body:{employeeId, type}
> vizualização dos um wifi do usuario

/searchwifi/:id
.get:
header {Authorization : APIKEY-api-key}
body:{employeeId, type}
> vizualização de wifi por id do usuario

/deletewifi/:id
.delete:
header {Authorization : APIKEY-api-key}
body:{employeeId, type}
> deleta de wifi por id do usuario

Credential
/createcredential
.post:
header {Authorization : APIKEY-api-key}
body:{userName, url, password, credentialTag}
> criação de um credential feita por uma usuario que tenha uma chave API válida

/searchcredential
.get:
header {Authorization : APIKEY-api-key}
> vizualização dos um credential do usuario

/searchcredential/:id
.get:
header {Authorization : APIKEY-api-key}
> vizualização de credential por id do usuario

/deletecredential/:id
.delete:
header {Authorization : APIKEY-api-key}
> deleta de credential por id do usuario

SafeNotes
/createsafenote
.post:
header {Authorization : APIKEY-api-key}
body:{safeNotetitle, text}
> criação de um safeNotes feita por uma usuario que tenha uma chave API válida

/searchsafenote
.get:
header {Authorization : APIKEY-api-key}
> vizualização dos um safeNotes do usuario

/searchsafenote/:id
.get:
header {Authorization : APIKEY-api-key}
> vizualização de safeNotes por id do usuario

/deletesafenote/:id
.delete:
header {Authorization : APIKEY-api-key}
> deleta de safeNotes por id do usuario
