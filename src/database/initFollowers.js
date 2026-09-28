import { Follower } from "../models/Follower.js";

// followerId SIGUE A followingId
// 1 Santiago, 2 Sara, 3 David, 4 Juan
const initialFollowers = [
  { followerId: 1, followingId: 2 },
  { followerId: 1, followingId: 3 },
  { followerId: 2, followingId: 1 },
  { followerId: 3, followingId: 1 },
  { followerId: 3, followingId: 2 },
  { followerId: 4, followingId: 1 },
  { followerId: 4, followingId: 3 },
];

export async function loadInitialFollowers() {
  try {
    const count = await Follower.count();
    if (count === 0) {
      await Follower.bulkCreate(initialFollowers, { validate: true });
      console.log("Initial followers loaded");
    } else {
      console.log("Ya hay followers en la base de datos");
    }
  } catch (error) {
    console.log("Error cargando los followers:", error);
  }
}
