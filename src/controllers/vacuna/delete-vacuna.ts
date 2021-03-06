import { VacunaService } from '../../services/vacuna-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseVacunas extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function deleteVacuna(req, res: Response, next) {
    VacunaService.instance.delete(req.params.idSanidad)
        .then(data => {
            res.send(new ResponseVacunas(data ? true : false, data, null));
        }, err => {
            res.status(500).send(new ResponseVacunas(null, null, err));
        })
}