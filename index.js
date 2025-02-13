//Para mais informações sobre o pg
//https://node-postgres.com/apis/pool

import pg from 'pg'

const { Pool, Client } = pg

const pool = new Pool({
	host: 'localhost',
	user: 'postgres',
	database: 'aulaNestMarcilio',
	password: 'ifrn.cn',
	port: 5432,
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
})

const client = await pool.connect()
try {
	await client.query('BEGIN')
	//const queryText = 'INSERT INTO Aluno (nome) VALUES($1) RETURNING idaluno'
	//const res = await client.query(queryText, ['Zee'])
	//const queryText2 = 'INSERT INTO Aluno (nome) VALUES($1) RETURNING idaluno'
        //const res2 = await client.query(queryText, ['Xuxa'])
	const queryText3 = 'DELETE FROM Aluno WHERE idaluno = 1'
        const res3 = await client.query(queryText3)
	
	await client.query('COMMIT')
} catch (e) {
	await client.query('ROLLBACK')
} finally {
	client.release()
}
