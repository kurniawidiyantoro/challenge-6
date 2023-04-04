const buttons = document.querySelectorAll(".delete-button");
buttons.forEach((button) => {
  button.addEventListener("click", async () => {
    const id = button.dataset.id;

    const sure = window.confirm("Are you sure?");
    if (sure) {
      await fetch(`/api/user/${id}`, { method: "DELETE" });
      window.location.reload();
    }
  });
});
