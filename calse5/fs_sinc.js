import fs from 'fs';

const mejoresAlumnos = `
alumn1
alumn2
alumn3
alumn4
alumn5
`;

fs.writeFileSync("mejores_alumnos.txt", mejoresAlumnos)

console.log(fs.existsSync("mejores_alumnos.txt")

)

