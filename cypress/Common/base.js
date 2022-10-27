import {
    cnpj
} from 'cpf-cnpj-validator';
import {
    cpf
} from "cpf-cnpj-validator";

class Base{
    geradorCpf() {
        var gerador = cpf.generate();
        return gerador
    }
    geradorCnpj() {
        const num = cnpj.generate();
        return num
    }
    geradorName() {
        const name = name.generate();
        return name
    }
}
export default Base