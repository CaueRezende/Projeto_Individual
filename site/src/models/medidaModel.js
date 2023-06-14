var database = require("../database/config");
var numUsuario = 0;

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    var instrucaoSql = ''
    numUsuario++

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
       tempo,  
                    dtTempo,
                        FORMAT(dtTempo,'%H:%i:%s') as dtTempo_grafico
                    from tempo
                    where fkUsuario = ${numUsuario}
                    order by idTempo desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        tempo,  
                    dtTempo,
                        FORMAT(dtTempo,'%H:%i:%s') as dtTempo_grafico
                    from tempo
                    where fkUsuario = ${numUsuario}
                    order by idTempo desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        tempo,  
                        CONVERT(varchar, dtTempo, 108) as dtTempo_grafico, 
                        fkUsuario
                        from tempo where fkUsuario = ${numUsuario}
                    order by idTempo desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        tempo,
                        DATE_FORMAT(dtTempo,'%H:%i:%s') as dtTempo_grafico, 
                        fkTempo 
                        from usuario where fkTempo = ${idUsuario} 
                    order by idTempo desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
