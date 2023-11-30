// TODO: Create type definitions for `Category`, `Product`, `Order` and `User` above the `Auth` type
const typeDefs = `

  type Category {
    _id: ID
    name: String!
  }

  type Product {
    _id: ID
    name: String!
    description: String
    image: String
    price: Float
    quantity: Int
    // assume one Category Cloths, Watch, Food
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    // Can have several products example shopping cart
    product: [Product]
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    orders(_id: ID!): Order
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
