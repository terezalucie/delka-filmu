/* Jeden lístek do divadla :i[Pěst na oko] stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem.
Hodnotu proměnné prijem vypište do stránky.
Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti?
Vypište do stránky i příjem divadla se započítanou slevou pro studenty.
*/

let cenaListku = 12
let hraNavstevnici = 174
let hraBezStudentu = 104.4
let hraMesic = 15
let prijem = (cenaListku * hraNavstevnici) * hraMesic
let studentCena = (cenaListku / 100) * 65
let studentiNavstevnici = (hraNavstevnici / 100) * 40
let prijemStudent = (studentCena * studentiNavstevnici) * hraMesic
let prijemNovy = Math.floor((cenaListku * hraBezStudentu * hraMesic) + prijemStudent)

console.log("Měsíční příjem divadla je " + prijem + " euro.")
console.log("Potom, co divadlo zavedlo studenské slevy se příjem změnil na " + prijemNovy + " euro. To je o " + prijem % prijemNovy + " euro méně.")
