<template>
  <div>
    <ChatHeader />
    <div v-for="(chat, i) in chats" :key="i">
      <router-link to="/messages">
        <ChatLists :data="chat" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ChatHeader from "../components/chats/Header";
import ChatLists from "../components/chats/Lists";
export default {
  name: "Chats",
  components: { ChatHeader, ChatLists },
  data() {
    return {
      chats: [
        {
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
          name: "Whitemans Chat",
          message: "Ned: Yeah I think I know wha...",
          time: "11:45 AM",
          count: 3
        },
        {
          image: "https://images.unsplash.com/photo-1565464027398-8f98698f6d52",
          name: "Stewart Family",
          message: "Steve: Great, thanks!",
          time: "11:39 AM",
          count: 1
        },
        {
          image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0",
          name: "Alice Whitman",
          message: "Image",
          time: "YESTERDAY",
          count: 0
        },
        {
          image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3",
          name: "Jack Whitman",
          message: "0:07",
          time: "FRIDAY",
          count: 0
        },
        {
          image: "https://images.unsplash.com/photo-1568725624707-9d968f934b75",
          name: "Lunch Group",
          message: "You: Sounds good!",
          time: "FRIDAY",
          count: 0
        },
        {
          image: "https://images.unsplash.com/photo-1565293253517-90cb8ce865a2",
          name: "Jane Pearson",
          message: "🔥 💭",
          time: "FRIDAY",
          count: 0
        }
      ]
    };
  }
};
</script>
