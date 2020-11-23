module.exports = {

    date (timestamp) {
        const date = new Date(timestamp) //aqui pega data local, mas trato como data universal abaixo

        // yyyy
        const year = date.getFullYear() //Colocando UTC estamos deixando a data como universal, pois dependendo do local onde estou pode dar problema

        // mm
        const month = `0${date.getMonth() + 1}`.slice(-2) // + 1 para vier numerico. slice podepegar os dois ultimos digitos, se assemelha ao ext texto excel

        // dd
        const day = `0${date.getDate()}`.slice(-2)
        const hour = date.getHours()
        const minutes = date.getMinutes()

        // return yyyy-mm-dd
        return {
            day,
            month,
            year,
            hour,
            minutes,
           iso: `${year}-${month}-${day}`,
           birthDay: `${day}/${month}`, // retorno tipo ISO
           format: `${day}/${month}/${year}`
        }
    },
    formatPrice(price) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price/100)
    },
    formatCpfCnpj(value) {
        value = value.replace(/\D/g, "")


        if (value.length >14)
        value = value.slice (0, -1)

        if (value.length > 11) {

                value = value.replace(/(\d{2})(\d)/, "$1.$2")

                value = value.replace(/(\d{3})(\d)/, "$1.$2")

                value = value.replace(/(\d{3})(\d)/, "$1/$2")

                value = value.replace(/(\d{4})(\d)/, "$1-$2")
        } else {
            
            value = value.replace(/(\d{3})(\d)/, "$1.$2")

            value = value.replace(/(\d{3})(\d)/, "$1.$2")

            value = value.replace(/(\d{3})(\d)/, "$1-$2")


        }
        return value
    },
    formatCep(value) {

        value = value.replace(/\D/g,"")

        if (value.length >8)
        value = value.slice (0, -1)

        value = value.replace(/(\d{5})(\d)/, "$1-$2")

        return value
    }


}


