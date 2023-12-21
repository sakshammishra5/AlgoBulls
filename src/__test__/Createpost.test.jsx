import { render, screen } from "@testing-library/react";
import { expect, it, vitest } from "vitest";
import Createpost from "../Components/Createpost";
import MOCK_DATA from "../mocks/mock.json";
import Post from "../Components/Post";

global.fetch = vitest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load cards in the createpost component", () => {
  render(
    <>
      <Createpost />
      {MOCK_DATA.map((item, i) => (
        <Post
          key={i}
          user={MOCK_DATA[0].username}
          comments={MOCK_DATA[0].comments}
          likes={MOCK_DATA[0].likes}
          content={MOCK_DATA[0].content}
          bookmarks={MOCK_DATA[0].bookmarks}
        />
      ))}
    </>
  );
  const beforePostCard = screen.getAllByTestId("postCard");
  expect(beforePostCard.length).toBe(3);
});
