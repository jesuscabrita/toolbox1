import chai from "chai";
import supertest from "supertest";
import { describe, it } from "mocha";
import { app } from "../../server.js";

const expect = chai.expect;
const request = supertest(app);

describe('Router de Files', () => {

    it('debería mostrar todos los archivos al hacer una solicitud GET a "/file/data"', async function() {
        this.timeout(20000);
        const response = await request.get('/api/file/data');
        expect(response.status).to.equal(200);
        expect(response.header['content-type']).to.include('application/json');
    });

    it('debería mostrar un archivo específico al hacer una solicitud GET a "/file/:nombreArchivo"', async function() {
        const fileName = 'test9.csv';
        const response = await request.get(`/api/file/${fileName}`);
        expect(response.status).to.equal(200);
        expect(response.header['content-type']).to.include('application/json');
    });

});