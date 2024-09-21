const callbacks = {
  onUpdate: async () => {
    await fetch(`${process.env.REVALIDATE_URL}`);
  },
};

export default callbacks;
