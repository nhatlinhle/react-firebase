// hooks/useRegister.ts
import { useState } from "react";
import { User } from "@/types/firestoreTypes";
import { addDoc, collection, DocumentReference, Timestamp } from "firebase/firestore";
import { auth, db } from "@/config/firebaseConfig";
import bcrypt from "bcryptjs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { omit } from "lodash";

export function useRegister() {
  const [user, setUser] = useState<User>({
    email: '',
    displayName: '',
    password: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, hashedPassword);
      const userCreated = userCredential.user;

      const userDocRef: DocumentReference = await addDoc(collection(db, 'users'), {
        ...omit(user, ['password']),
        email: userCreated.email,
        createdAt: Timestamp.fromDate(user.createdAt),
        updatedAt: Timestamp.fromDate(user.updatedAt),
      });
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return {
    user,
    handleChange,
    handleRegister,
  };
}
