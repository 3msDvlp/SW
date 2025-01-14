
use sakila;

select count(*) from actor;

select 
   a.first_name, fa.film_id, f.title 
from 
    actor as a, 
    film_actor as fa, 
    film as f
where 
    a.last_name='monroe' and 
    a.actor_id=fa.actor_id and
    f.film_id=fa.film_id;