INSERT INTO departments (id, name)
VALUES (1, 'Operations'),
       (2, 'Retail'),
       (3, 'Yoga'),
       (4, 'Fitness'),
       (5, 'Youth Programs'),
       (6, 'Events'),
       (7, 'C_Suite');

INSERT INTO roles (id, title, salary, department_id)
         VALUES (11, 'gen_staff', 25000, 1),
                (12, 'asst_man', 30000, 1),
                (13, 'asst_gen_man', 40000, 1),
                (14, 'manager', 50000, 1),
                (15, 'operations_director', 60000, 1),
                (21, 'retail_lead', 30000, 2),
                (22, 'warehouse_coordinator', 35000, 2),
                (23, 'warehouse_manager', 40000, 2),
                (24, 'retail_director', 60000, 2),
                (31, 'instructor', 25000, 3),
                (32, 'developer', 30000, 3),
                (33, 'manager', 35000, 3),
                (34, 'yoga_director', 40000, 3),
                (41, 'instructor', 25000, 4),
                (42, 'developer', 35000, 4),
                (43, 'auditor', 35000, 4),
                (44, 'fitness_director', 60000, 4),
                (51, 'coach', 25000, 5),
                (52, 'asst_head_coach', 35000, 5),
                (53, 'head_coach', 45000, 5),
                (54, 'yp_director', 60000, 5),
                (61, 'event_lead', 25000, 6),
                (62, 'event_auditor', 30000, 6),
                (63, 'events_director', 60000, 6),
                (71, 'CEO', 100000, 7),
                (72, 'CTO', 900000, 7),
                (73, 'CFO', 900000, 7),
                (74, 'COO', 900000, 7);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
                VALUES(111, 'Beth', 'Davies', 11, 121),
                      (112, 'Paul', 'Butters', 11, 121),
                      (113, 'Rafe', 'Ables', 11, 121),
                      (114, 'John', 'Pumpkins', 11, 123),
                      (115, 'Wendy', 'Falls', 11, 123),
                      (116, 'Jessica', 'Sploosher', 11, 122),
                      (117, 'Big', 'WillyStyle', 11, 122),
                      (118, 'Nate', 'Fakers', 11, 124),
                      (119, 'Bob', 'Tomkins', 11, 124),
                      (121, 'Steve', 'Waters', 12, 131),
                      (122, 'Will', 'Stoppers', 12, 131),
                      (123, 'Jim', 'Jefferies', 12, 132),
                      (124, 'Rich', 'Poopkins', 12, 132),
                      (131, 'Beau', 'Bridgets', 13, 141),
                      (132, 'Jeff', 'Hammies', 13, 141),
                      (141, 'Bella', 'Childress', 14, 151),
                      (151, 'Steve', 'Weenus', 15, 741),
                      (741, 'Frank', 'Ocean', 74, 711);