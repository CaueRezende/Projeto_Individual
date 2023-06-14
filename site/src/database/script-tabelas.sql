CREATE DATABASE fluminense;
USE fluminense;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45)
);

CREATE TABLE tempo(
idTempo INT PRIMARY KEY AUTO_INCREMENT,
tempo VARCHAR(45),
dtTempo DATETIME,
fkUsuario INT,
CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
) AUTO_INCREMENT = 1000;

/* CREATE TABLE historico (
idHistorico INT,
fkTempo INT,
fkUsuario INT,
CONSTRAINT fkHistoricoTempo FOREIGN KEY (fkTempo) 
	REFERENCES tempo(idTempo),
CONSTRAINT fkHistoricoUsuario FOREIGN KEY (fkUsuario) 
	REFERENCES usuario(idUsuario),
CONSTRAINT pkCompostaHistorico PRIMARY KEY (idHistorico, fkTempo, fkUsuario)
);
 */