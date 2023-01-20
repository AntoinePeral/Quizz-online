INSERT INTO "user" ("firstname", "lastname", "email", "password") VALUES
('Jean-Claude', 'Vandame', 'jcv@oclock.io', 'beAware'),
('Mi', 'Nouche', 'minouche@jackyetminette.com', 'kneel!youbastards'),
('Chuck', 'Norris', 'chuck@oclock.io', 'DTG');

INSERT INTO "quiz" ("title", "description", "user_id") VALUES
('Philosophe', 'la souplesse des ischios, c''est le sens de la vie. Kant en PLS', 1),
('Shebba', 'Royale Food : La gastronomie féline', 2),
('Productions de Chuck', 'Walker, Texas Ranger : La meilleure série jamais faite', 3);

INSERT INTO "tag" ("name") VALUES
('Chuck Norris'),
('Philosophie'),
('Minouche');


INSERT INTO "level" ("name") VALUES
('Facile'),
('Moyen'),
('Difficile');