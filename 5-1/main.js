const profiles = {
  profiles: [
    {
      name: "佐藤",
      age: 22,
    },
    {
      name: "鈴木",
      age: 34,
    },
    {
      name: "高橋",
      age: 42,
    },
    {
      name: "田中",
      age: 15,
    },
  ],
};

// const profile = profiles.profiles;

// for (let i = 0; i < profile.length; i++) {
//   console.log(`${profile[i].name}:${profile[i].age}`);
// }

const profile = profiles.profiles;

for (let i = 0; i < profile.length; i++) {
  console.log("%s" + ":" + "%d", profile[i].name, profile[i].age);
}
