Run this repo with `npm start`.

Expected output:

```
Error creating connection: MissingPrimaryColumnError: Entity "TestEntity" does not have a primary column. Primary column is required to have in all your entities. Use @PrimaryColumn decorator to add a primary column to your entity.
(exit: 1)
```

Actual output:

```
(node:16191) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): MissingPrimaryColumnError: Entity "TestEntity" does not have a primary column. Primary column is required to have in all your entities. Use @PrimaryColumn decorator to add a primary column to your entity.
Successfully connected to the database!
Successfully inserted to the database.
```
