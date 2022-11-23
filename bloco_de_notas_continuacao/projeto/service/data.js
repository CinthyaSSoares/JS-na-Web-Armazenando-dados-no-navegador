export const removeDatasRepetidas = (datas) => {
    const datasUnicas = [];
    datas.forEach((data => {
        if(datasUnicas.indexOf(data.dataFormatada) == -1){
            datasUnicas.push(data.dataFormatada)
        }
    }))
    return datasUnicas;
}

export const ordenaDatas = (data) => {
    data.sort((a, b) => { // 'a', 'b' é as datas (Array.prototype.sort())
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD'); //ordenando por ano para ter a logica de crescente
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
        return primeiraData - segundaData;
    })
}