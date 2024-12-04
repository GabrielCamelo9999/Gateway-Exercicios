import { CriarRegistroDto } from './dtos/criar-registro-dto';
export declare class AppController {
    getHello(): any;
    private logger;
    private clienteAdminBackend;
    constructor();
    criarEmpresa(criarRegistroDto: CriarRegistroDto): Promise<import("rxjs").Observable<any>>;
}
