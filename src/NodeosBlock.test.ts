import { NodeosBlock } from "./NodeosBlock"
import { nodeosRawBlock } from "./testHelpers/nodeosRawBlock"

describe("NodeosBlock", () => {
  let eosBlock: NodeosBlock

  beforeEach(() => {
    eosBlock = new NodeosBlock(nodeosRawBlock)
  })

  it("collects actions from blocks", async () => {
    const { actions } = eosBlock
    expect(actions).toEqual([
      {
        payload: {
          account: "testing",
          actionIndex: 0,
          cpu_usage_us: 778,
          net_usage_words: 14,
          authorization: [
            {
              actor: "testing",
              permission: "active",
            },
          ],
          data: {
            memo: "EOS is awesome!",
          },
          name: "action",
          transactionId: "b890beb84a6d1d77755f2e0cdad48e2ffcfd06ff3481917b4875cc5f3a343533",
        },
        type: "testing::action",
      },
      {
        payload: {
          account: "testing",
          actionIndex: 1,
          cpu_usage_us: 778,
          net_usage_words: 14,
          authorization: [
            {
              actor: "testing",
              permission: "active",
            },
          ],
          data: {
            memo: "Go EOS!",
          },
          name: "action2",
          transactionId: "b890beb84a6d1d77755f2e0cdad48e2ffcfd06ff3481917b4875cc5f3a343533",
        },
        type: "testing::action2",
      },
    ])
  })
})
