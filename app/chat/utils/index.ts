export const generateChatName = (
  filteredUsers: {
    id: string;
    name: string;
    email: string | null;
    image: string | null;
  }[],
  selectedChatModalCards: string[]
) => {
  return filteredUsers
    .map((user) =>
      selectedChatModalCards.includes(user.id) ? user.name : undefined
    )
    .filter((userId) => userId !== undefined)
    .join(', ');
};

export const generateFilteredUsers = (
  users: {
    id: string;
    name: string;
    email: string | null;
    image: string | null;
  }[],
  chatModalInput: string
) => {
  const filteredUsers = users.filter((user) => {
    const nameMatches = user.name
      .toLowerCase()
      .includes(chatModalInput.toLowerCase());
    const emailMatches = user.email
      ? user.email.toLowerCase().includes(chatModalInput.toLowerCase())
      : false;
    return nameMatches || emailMatches;
  });
  return filteredUsers;
};
