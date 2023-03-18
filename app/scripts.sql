-- Crear tabla de administradores
CREATE TABLE Administrators (
    id INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(100) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL
);

-- Crear tabla de noticias
CREATE TABLE News (
    id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(255) NOT NULL,
    content NVARCHAR(MAX) NOT NULL,
    image_url NVARCHAR(255),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    admin_id INT NOT NULL FOREIGN KEY REFERENCES Administrators(id)
);

-- Crear tabla de fotos
CREATE TABLE Photos (
    id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(255) NOT NULL,
    image_url NVARCHAR(255) NOT NULL,
    match_date DATE NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    admin_id INT NOT NULL FOREIGN KEY REFERENCES Administrators(id)
);

-- Crear tabla de partidos
CREATE TABLE Matches (
    id INT PRIMARY KEY IDENTITY(1,1),
    home_team NVARCHAR(100) NOT NULL,
    away_team NVARCHAR(100) NOT NULL,
    home_score INT NOT NULL,
    away_score INT NOT NULL,
    match_date DATE NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    admin_id INT NOT NULL FOREIGN KEY REFERENCES Administrators(id)
);

-- Crear tabla de posiciones del campeonato
CREATE TABLE Standings (
    id INT PRIMARY KEY IDENTITY(1,1),
    team NVARCHAR(100) NOT NULL UNIQUE,
    matches_played INT NOT NULL DEFAULT 0,
    wins INT NOT NULL DEFAULT 0,
    draws INT NOT NULL DEFAULT 0,
    losses INT NOT NULL DEFAULT 0,
    goals_for INT NOT NULL DEFAULT 0,
    goals_against INT NOT NULL DEFAULT 0,
    goal_difference INT NOT NULL DEFAULT 0,
    points INT NOT NULL DEFAULT 0
);