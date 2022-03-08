for (i = 13; i < 18; i++) {
  expect(whichSchool(i)).to.be.equal("Secondary School");
}

for (i = 19; i < 100; i++) {
  expect(whichSchool(i)).to.be.equal("Lighthouse Labs");
}

for (i = 1; i < 12; i++) {
  expect(whichSchool(i)).to.be.equal("Elementary School");
}