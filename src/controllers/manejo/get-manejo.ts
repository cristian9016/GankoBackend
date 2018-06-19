import { ManejoService } from '../../services/manejo-service';
import { RegistroManejo } from "../../services/models/manejo";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { ResponseBody } from '../response-body';


class ResponseManejo extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function getManejo(req, res: Response, next) {
    
    ManejoService.instance.getAll()
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseManejo(true, data, null));
            }

        }, err => {
            res.status(500).send(new ResponseManejo(null, null, err));
        })
}