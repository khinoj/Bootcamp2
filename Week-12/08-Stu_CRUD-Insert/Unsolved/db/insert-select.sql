-- inserting into table biographies with id and name --
INSERT INTO biographies (id, name)
VALUES
 -- 001 = id and Name = "Diary of Anne Frank" and so on--
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

-- select query to see inside the table --
SELECT * FROM biographies;
