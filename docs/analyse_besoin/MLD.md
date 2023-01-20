user(id, first_name, last_name, email, password)
quiz(id, titre, description, #user(id))
question(id, description, anecdote, wiki, #quiz(id), #answer(id), #level(id))
level(id, nom)
answer(id, description, #question(id))
tag(id, nom)

quiz_has_tag(#quiz(id), #tag(id))
