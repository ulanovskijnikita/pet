export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      cart_items: {
        Row: {
          added_date: string
          cart_id: number
          items_quantity: number
          product_id: number
        }
        Insert: {
          added_date?: string
          cart_id: number
          items_quantity: number
          product_id: number
        }
        Update: {
          added_date?: string
          cart_id?: number
          items_quantity?: number
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_cart_id_fkey"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "carts"
            referencedColumns: ["cart_id"]
          },
          {
            foreignKeyName: "cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
        ]
      }
      cart_statuses: {
        Row: {
          cart_status_id: number
          cart_status_value: Database["public"]["Enums"]["cart_status"]
        }
        Insert: {
          cart_status_id?: number
          cart_status_value: Database["public"]["Enums"]["cart_status"]
        }
        Update: {
          cart_status_id?: number
          cart_status_value?: Database["public"]["Enums"]["cart_status"]
        }
        Relationships: []
      }
      carts: {
        Row: {
          cart_id: number
          cart_status_id: number
          user_id: number
        }
        Insert: {
          cart_id?: number
          cart_status_id?: number
          user_id: number
        }
        Update: {
          cart_id?: number
          cart_status_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "carts_cart_status_id_fkey"
            columns: ["cart_status_id"]
            isOneToOne: false
            referencedRelation: "cart_statuses"
            referencedColumns: ["cart_status_id"]
          },
          {
            foreignKeyName: "carts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      product_categories: {
        Row: {
          product_category_id: number
          product_category_value: Database["public"]["Enums"]["categories"]
        }
        Insert: {
          product_category_id?: number
          product_category_value: Database["public"]["Enums"]["categories"]
        }
        Update: {
          product_category_id?: number
          product_category_value?: Database["public"]["Enums"]["categories"]
        }
        Relationships: []
      }
      product_price_currencies: {
        Row: {
          product_price_currency_id: number
          product_price_currency_value: Database["public"]["Enums"]["currencies"]
        }
        Insert: {
          product_price_currency_id?: number
          product_price_currency_value: Database["public"]["Enums"]["currencies"]
        }
        Update: {
          product_price_currency_id?: number
          product_price_currency_value?: Database["public"]["Enums"]["currencies"]
        }
        Relationships: []
      }
      product_ratings: {
        Row: {
          product_id: number
          rating: number
          user_id: number
        }
        Insert: {
          product_id: number
          rating: number
          user_id: number
        }
        Update: {
          product_id?: number
          rating?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_ratings_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "product_ratings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      product_statuses: {
        Row: {
          product_status_id: number
          product_status_value: Database["public"]["Enums"]["product_status"]
        }
        Insert: {
          product_status_id?: number
          product_status_value: Database["public"]["Enums"]["product_status"]
        }
        Update: {
          product_status_id?: number
          product_status_value?: Database["public"]["Enums"]["product_status"]
        }
        Relationships: []
      }
      product_subcategories: {
        Row: {
          product_subcategory_id: number
          product_subcategory_value: Database["public"]["Enums"]["subcategories"]
        }
        Insert: {
          product_subcategory_id?: number
          product_subcategory_value: Database["public"]["Enums"]["subcategories"]
        }
        Update: {
          product_subcategory_id?: number
          product_subcategory_value?: Database["public"]["Enums"]["subcategories"]
        }
        Relationships: []
      }
      products: {
        Row: {
          product_category_id: number
          product_desc: string
          product_id: number
          product_img: string
          product_price_count: number
          product_price_currency_id: number
          product_subcategory_id: number
          product_tag: string
        }
        Insert: {
          product_category_id: number
          product_desc: string
          product_id?: number
          product_img: string
          product_price_count: number
          product_price_currency_id: number
          product_subcategory_id: number
          product_tag: string
        }
        Update: {
          product_category_id?: number
          product_desc?: string
          product_id?: number
          product_img?: string
          product_price_count?: number
          product_price_currency_id?: number
          product_subcategory_id?: number
          product_tag?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_product_category_id_fkey"
            columns: ["product_category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["product_category_id"]
          },
          {
            foreignKeyName: "products_product_price_currency_id_fkey"
            columns: ["product_price_currency_id"]
            isOneToOne: false
            referencedRelation: "product_price_currencies"
            referencedColumns: ["product_price_currency_id"]
          },
          {
            foreignKeyName: "products_product_supcategory_id_fkey"
            columns: ["product_subcategory_id"]
            isOneToOne: false
            referencedRelation: "product_subcategories"
            referencedColumns: ["product_subcategory_id"]
          },
        ]
      }
      products_statuses: {
        Row: {
          product_id: number
          product_status_id: number
        }
        Insert: {
          product_id: number
          product_status_id: number
        }
        Update: {
          product_id?: number
          product_status_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_statuses_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "products_statuses_product_status_id_fkey"
            columns: ["product_status_id"]
            isOneToOne: false
            referencedRelation: "product_statuses"
            referencedColumns: ["product_status_id"]
          },
        ]
      }
      products_users_favourites: {
        Row: {
          product_id: number
          user_id: number
        }
        Insert: {
          product_id: number
          user_id: number
        }
        Update: {
          product_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_favourites_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "user_favourites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_rate: {
        Row: {
          message: string
          user_id: number
        }
        Insert: {
          message: string
          user_id?: number
        }
        Update: {
          message?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_rate_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_statuses: {
        Row: {
          user_status_id: number
          user_status_value: Database["public"]["Enums"]["user_status"]
        }
        Insert: {
          user_status_id?: number
          user_status_value: Database["public"]["Enums"]["user_status"]
        }
        Update: {
          user_status_id?: number
          user_status_value?: Database["public"]["Enums"]["user_status"]
        }
        Relationships: []
      }
      users: {
        Row: {
          user_email: string
          user_id: number
          user_name: string
          user_password: string
          user_status_id: number
        }
        Insert: {
          user_email: string
          user_id?: number
          user_name: string
          user_password: string
          user_status_id?: number
        }
        Update: {
          user_email?: string
          user_id?: number
          user_name?: string
          user_password?: string
          user_status_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_user_status_id_fkey"
            columns: ["user_status_id"]
            isOneToOne: false
            referencedRelation: "user_statuses"
            referencedColumns: ["user_status_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_to_user_cart: {
        Args: { p_id: number; q: number; u_id: number }
        Returns: {
          cart_length: number
        }[]
      }
      authentication_user: {
        Args: { u_email: string; u_pass: string }
        Returns: {
          u_id: number
        }[]
      }
      authorization_user: {
        Args: { u_id: number }
        Returns: {
          cart_id: number
          cart_length: number
          email: string
          id: number
          name: string
          status: Database["public"]["Enums"]["user_status"]
        }[]
      }
      change_quantity_cart_product: {
        Args: { p_id: number; q: number; u_id: number }
        Returns: {
          length: number
          quantity: number
        }[]
      }
      get_an_order: {
        Args: { u_id: number }
        Returns: {
          cart_id: number
          cart_length: number
        }[]
      }
      get_history_list: {
        Args: { u_id: number }
        Returns: {
          cart_id: number
          cart_price: number
          cart_products: Json
          cart_status: Database["public"]["Enums"]["cart_status"]
        }[]
      }
      get_product_by_id: {
        Args: { p_id: number; u_id: number | null }
        Returns: {
          category: Database["public"]["Enums"]["categories"]
          id: number
          img: string
          is_favorites: boolean
          price_count: number
          price_currency: Database["public"]["Enums"]["currencies"]
          product_desc: string
          rating: number
          statuses: Database["public"]["Enums"]["product_status"][]
          subcategory: Database["public"]["Enums"]["subcategories"]
          tag: string
        }[]
      }
      get_products_by_cart: {
        Args: { c_id: number; u_id: number | null }
        Returns: {
          id: number
          img: string
          is_favorites: boolean
          price_count: number
          price_currency: Database["public"]["Enums"]["currencies"]
          rating: number
          statuses: Database["public"]["Enums"]["product_status"][]
          tag: string
          user_rating: number
        }[]
      }
      get_products_by_category: {
        Args: {
          category_id: number
          lim: number
          off_set: number | null
          subcategory_id: number
          user_auth_id: number | null
        }
        Returns: {
          id: number
          img: string
          is_favorites: boolean
          price_count: number
          price_currency: Database["public"]["Enums"]["currencies"]
          rating: number
          statuses: Database["public"]["Enums"]["product_status"][]
          tag: string
        }[]
      }
      get_products_by_favourite: {
        Args: { lim: number; off_set: number | null; user_auth_id: number | null }
        Returns: {
          id: number
          img: string
          is_favorites: boolean
          price_count: number
          price_currency: Database["public"]["Enums"]["currencies"]
          rating: number
          statuses: Database["public"]["Enums"]["product_status"][]
          tag: string
        }[]
      }
      get_sign_in_response: {
        Args: { u_email: string }
        Returns: {
          user_email: string
          user_id: number
          user_password: string
        }[]
      }
      get_user_by_id: {
        Args: { u_id: number }
        Returns: {
          cart_id: number
          cart_length: number
          email: string
          id: number
          name: string
          status: Database["public"]["Enums"]["user_status"]
        }[]
      }
      get_user_cart: {
        Args: { u_id: number }
        Returns: {
          id: number
          img: string
          is_favorites: boolean
          price_count: number
          price_currency: Database["public"]["Enums"]["currencies"]
          quantity: number
          rating: number
          statuses: Database["public"]["Enums"]["product_status"][]
          tag: string
        }[]
      }
      get_user_cart_length: { Args: { u_id: number }; Returns: number }
      get_user_progress_cart: {
        Args: { u_id: number }
        Returns: {
          cartLength: number
          id: number
          list: Json
          price: number
          status: string
        }[]
      }
      identity_user: {
        Args: { u_email: string }
        Returns: {
          user_id: number
        }[]
      }
      make_user_order: {
        Args: { p_cart_id: number }
        Returns: {
          cartLength: number
          id: number
          list: Json
          price: number
          status: string
        }[]
      }
      register_user: {
        Args: { u_email: string; u_name: string; u_pass: string }
        Returns: undefined
      }
      search_products_by_tag: {
        Args: {
          lim: number
          off_set: number
          search_tag: string
          user_auth_id: number
        }
        Returns: {
          id: number
          img: string
          is_favorites: boolean
          price_count: number
          price_currency: Database["public"]["Enums"]["currencies"]
          rating: number
          statuses: Database["public"]["Enums"]["product_status"][]
          tag: string
        }[]
      }
      send_user_message: {
        Args: { u_id: number; u_message: string }
        Returns: {
          user_status: Database["public"]["Enums"]["user_status"]
        }[]
      }
      set_product_rating: {
        Args: { p_id: number; p_r: number; u_id: number | null }
        Returns: {
          product_rating: number
          user_rating: number
        }[]
      }
      set_progress_cart_product_quantity: {
        Args: { p_cart_id: number; p_product_id: number; p_quantity: number }
        Returns: {
          cart_length: number
          cart_total_price: number
          product: Json
          quantity: number
          user_id: number
        }[]
      }
      set_quantity_cart_product: {
        Args: { p_id: number; q: number; u_id: number }
        Returns: {
          length: number
          quantity: number
        }[]
      }
      toggle_user_favourite: {
        Args: { p_id: number; u_id: number | null }
        Returns: boolean
      }
      validate_user: {
        Args: { u_email: string }
        Returns: {
          email_res: boolean
        }[]
      }
    }
    Enums: {
      cart_status: "progress" | "pending" | "completion"
      categories: "accessories" | "clothing" | "foodies"
      currencies: "$"
      product_status: "new" | "sold" | "sale"
      subcategories: "all" | "cat" | "dog" | "bird" | "fish"
      user_status: "new" | "old"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      cart_status: ["progress", "pending", "completion"],
      categories: ["accessories", "clothing", "foodies"],
      currencies: ["$"],
      product_status: ["new", "sold", "sale"],
      subcategories: ["all", "cat", "dog", "bird", "fish"],
      user_status: ["new", "old"],
    },
  },
} as const
