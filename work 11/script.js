//დავალება 1
async function fetchAndDisplayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP შეცდომა: ${response.status}`);
    }

    const posts = await response.json();
    const firstTenPosts = posts.slice(0, 10);
    const container = document.getElementById("posts-container");

    firstTenPosts.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("post-card");

      const title = document.createElement("h3");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      card.appendChild(title);
      card.appendChild(body);
      container.appendChild(card);
    });
  } catch (error) {
    console.error("დავალება 1-ის შეცდომა:", error.message);
  }
}

//დავალება 2
async function fetchUserSafely(id) {
  const resultBox = document.getElementById("user-result");
  resultBox.className = "result-box";

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    if (!response.ok) {
      throw new Error(
        `მომხმარებელი ID-ით (${id}) ვერ მოიძებნა! (სტატუსი: ${response.status})`,
      );
    }

    const user = await response.json();
    resultBox.classList.add("success");
    resultBox.innerHTML = `<strong>სახელი:</strong> ${user.name} | <strong>Email:</strong> ${user.email}`;
    console.log("მომხმარებლის მონაცემები:", user);
  } catch (error) {
    resultBox.classList.add("error");
    resultBox.textContent = error.message;
    console.error("დავალება 2-ის შეცდომა:", error.message);
  }
}

//დავალება 3
function createPostRequest() {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "ახალი პოსტი",
      body: "შექმნილია Promise.all-ის ტესტისთვის",
      userId: 1,
    }),
  }).then((res) => {
    if (!res.ok) throw new Error("POST მოთხოვნა ჩავარდა");
    return res.json();
  });
}

function getPostsRequest() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    if (!res.ok) throw new Error("GET მოთხოვნა ჩავარდა");
    return res.json();
  });
}

async function handleTask3() {
  try {
    console.log("მოთხოვნები იგზავნება პარალელურად...");

    const [createdPost, allPosts] = await Promise.all([
      createPostRequest(),
      getPostsRequest(),
    ]);

    console.log("--- დავალება 3-ის შედეგები ---");
    console.log("1. შექმნილი პოსტი (POST):", createdPost);
    console.log("2. არსებული პოსტების სია (GET):", allPosts);
    alert("შედეგები წარმატებით დაიბეჭდა Console-ში! (F12)");
  } catch (error) {
    console.error("დავალება 3-ის შეცდომა:", error.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. ავტომატურად ჩავტვირთოთ პირველი 10 პოსტი
  fetchAndDisplayPosts();

  // 2. მეორე დავალების ძებნის ღილაკი
  document.getElementById("search-btn").addEventListener("click", () => {
    const userId = document.getElementById("user-id-input").value;
    if (userId) {
      fetchUserSafely(userId);
    } else {
      alert("გთხოვთ ჩაწეროთ ID!");
    }
  });

  // 3. მესამე დავალების ღილაკი
  document
    .getElementById("create-and-fetch-btn")
    .addEventListener("click", handleTask3);
});
