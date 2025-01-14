SELECT a.nombre_alumno, p.peliculas
FROM 
  aula as a,
  peliculas as p,
  relaciones as r
WHERE
 a.codigo = r.cod_alumno and
 r.cod_pelicula = p.codigo_pelicula;
 