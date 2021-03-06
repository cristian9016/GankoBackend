import { Response } from 'express';
import { BovinoService } from '../../services/bovino-service';


class ResponseBody {
    constructor(public success: boolean,
        public data: any,
        public err: string) { }
}

export function getBovinos(req, res: Response, next) {

    let q: string = req.query.q ? req.query.q : "";
    let leche: boolean = req.query.leche ? req.query.leche == "true" : undefined;
    let ceba: boolean = req.query.ceba ? req.query.ceba == "true" : undefined;
    let ambos: boolean = req.query.ambos ? req.query.ambos == "true" : undefined;
    let celo: boolean = req.query.celo ? req.query.celo == "true" : undefined;
    let servicio: boolean = req.query.servicio ? req.query.servicio == "true" : undefined;
    let diagnostico: boolean = req.query.diagnostico ? req.query.diagnostico == "true" : undefined;
    let destete: boolean = req.query.destete ? req.query.destete == "true" : undefined;
    let retirados: boolean = req.query.retirados ? req.query.retirados == "true" : undefined;
    let sexo: string = req.query.sexo ? req.query.sexo : undefined;

    let idFinca = req.params.idFinca;
    BovinoService.instance.findBovinos(idFinca, q, leche, ceba, ambos, celo, servicio, diagnostico, destete, retirados, sexo)
        .then(data => res.send(new ResponseBody(true, data, null)))
        .catch( err => res.status(500).send(new ResponseBody(null, null, err)));
}