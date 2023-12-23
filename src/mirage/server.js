import { createServer, Model } from "miragejs";

createServer({
  models: {
    users: Model,
  },

  seeds(server) {
    server.create("user", {
      id: 0,
      username: "saksham",
      password: 123,
      user: {
        name: "saksham",
        photo:
          "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      },
      date: "2023-12-02",
      content: "This is a post content.",
      isLiked:true,
      likes: 5,
      bookmarks: true,
      isOwner: true,
      comments: [
        { id: 1, userId: 2, user: "Alice", content: "Great post!" },
        { id: 2, userId: 3, user: "Bob", content: "I agree!" },
      ],

      // Add more posts as needed
    }),
      server.create("user", {
        id: 1,
        username: "sita",
        password: 123,
        user: {
          name: "saksham",
          photo:
            "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
        },
        date: "2023-12-02",
        content: "This is a post content.",
        isLiked:true,
        likes: 5,
        bookmarks: false,
        isOwner: true,
        comments: [
          { id: 1, userId: 2, user: "Alice", content: "Great post!" },
          { id: 2, userId: 3, user: "Bob", content: "I agree!" },
        ],

        // Add more posts as needed
      }),
      server.create("user", {
        id: 2,
        username: "geeta",
        password: 123,
        user: {
          name: "saksham",
          photo:
            "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
        },
        date: "2023-12-02",
        content: "This is a post content.",
        isLiked:false,
        likes: 5,
        bookmarks: false,
        isOwner: true,
        comments: [
          { id: 1, userId: 2, user: "Alice", content: "Great post!" },
          { id: 2, userId: 3, user: "Bob", content: "I agree!" },
        ],

        // Add more posts as needed
      })
  },

  routes() {
    this.namespace = "api";

    this.get("/getpost", (schema, request) => {
      return schema.users.all();
    });

    this.get('/liked-posts', (schema) => {
      return schema.users.where({ isLiked: true });
    });

    this.get('/bookmarked-post', (schema) => {
      return schema.users.where({ bookmarks: true });
    });

    this.post("/login", (schema, request) => {
      const { username, password } = JSON.parse(request.requestBody);
      // ⚠️ This is an extremely naive version of authentication. Please don't
      // do this in the real world, and never save raw text passwords
      // in your database 😅
      const foundUser = schema.users.findBy({ username, password });
      if (!foundUser) {
        return new Response(
          401,
          {},
          { message: "No user with those credentials found!" }
        );
      }

      // At the very least, don't send the password back to the client 😅
      foundUser.password = undefined;
      return {
        user: foundUser,
        token: "Enjoy your pizza, here's your tokens.",
      };
    });
  },
});

// server.create("user", {
//   id: 2,
//   username: "Ram",
//   password: 123,
//   posts: [
//     {
//       id: 2,
//       userId: 2,
//       user: {
//         name: "Ram",
//         photo:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-W5q08CJ22SSbA3BtabzBuLlF5iwSkgktA&usqp=CAU",
//       },
//       date: "2023-12-02",
//       content: "This is a post content.",
//       likes: 5,
//       bookmarks: true,
//       isOwner: true,
//       comments: [
//         { id: 1, userId: 2, user: "Alice", content: "Great post!" },
//         { id: 2, userId: 3, user: "Bob", content: "I agree!" },
//       ],
//     },
//     // Add more posts as needed
//   ],
// });
