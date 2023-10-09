interface Actor {
  img: string;
  name: string;
}

interface Post {
  title: string;
}

interface Group {
  name: string;
}

interface Picture {
  thumbnail: string;
}

type NotificationType =
  | "post-reaction"
  | "new-follower"
  | "joined-group"
  | "private-message"
  | "picture-comment"
  | "left-group";
interface BaseNotification {
  id: number;
  actor: Actor;
  type: NotificationType;
  timestamp: Date;
  hasRead: boolean;
}

interface PostReactionNotification extends BaseNotification {
  type: "post-reaction";
  post: Post;
}

interface NewFollowerNotification extends BaseNotification {
  type: "new-follower";
}

interface JoinedGroupNotification extends BaseNotification {
  type: "joined-group";
  group: Group;
}

interface PrivateMessageNotification extends BaseNotification {
  type: "private-message";
  message: string;
}

interface PictureCommentNotification extends BaseNotification {
  type: "picture-comment";
  picture: Picture;
}

interface LeftGroupNotification extends BaseNotification {
  type: "left-group";
  group: Group;
}

export type Notification =
  | PostReactionNotification
  | NewFollowerNotification
  | JoinedGroupNotification
  | PrivateMessageNotification
  | PictureCommentNotification
  | LeftGroupNotification;
