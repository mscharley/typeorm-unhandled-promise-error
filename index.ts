#!/usr/bin/env ts-node

import "reflect-metadata";
import { createConnection, Column, Entity } from "typeorm";

@Entity()
class TestEntity {
  @Column()
  public text: string;

  @Column()
  public int: number;

  @Column()
  public bool: boolean;
}

createConnection({
  type: "sqlite",
  database: `./database-${new Date().getTime()}.sqlite`,
  entities: [ TestEntity ],
  synchronize: true,
}).then(async (connection) => {
  console.log("Successfully connected to the database!");
  const em = connection.createEntityManager();

  const entity = new TestEntity();
  entity.text = "Hello world!";
  entity.int = 10;
  entity.bool = true;
  await em.insert(TestEntity, entity);
  console.log("Successfully inserted to the database.");

  await connection.close();
}).catch((e) => {
  console.log(`Error creating connection: ${e}`);
});
